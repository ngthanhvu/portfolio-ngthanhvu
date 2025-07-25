import { useState, useEffect } from 'react';
import { FaRandom, FaLightbulb, FaHashtag, FaRegCopy, FaRedo } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const PasswordGenerator = () => {
    const [type, setType] = useState('random');
    const [length, setLength] = useState(20);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(false);
    const [password, setPassword] = useState('');

    const { t } = useTranslation();

    const generatePassword = () => {
        if (type === 'pin') {
            return Array.from({ length }, () => Math.floor(Math.random() * 10)).join('');
        }

        if (type === 'memorable') {
            const words = ['monkey', 'blue', 'tree', 'happy', 'star', 'code', 'fish', 'sky', 'open', 'rain'];
            const result = Array.from({ length: Math.max(2, Math.floor(length / 6)) }, () => {
                return words[Math.floor(Math.random() * words.length)];
            }).join('-');
            return result.slice(0, length);
        }

        let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (includeNumbers) charset += '0123456789';
        if (includeSymbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';

        let result = '';
        for (let i = 0; i < length; i++) {
            result += charset[Math.floor(Math.random() * charset.length)];
        }
        return result;
    };

    const refreshPassword = () => {
        setPassword(generatePassword());
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(password);
        alert('Copied to clipboard!');
    };

    useEffect(() => {
        refreshPassword();
        document.title = 'Password Generator';
    }, [type, length, includeNumbers, includeSymbols]);

    return (
        <div className="flex flex-col items-center justify-center px-4 mt-10">
            <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md font-sans dark:bg-gray-800">
                {/* Type selector */}
                <h2 className="text-lg font-semibold mb-4">{t('password_generator.choose_type')}</h2>
                <div className="flex flex-col gap-2 md:flex-row md:gap-0 mb-4">
                    {['random', 'memorable', 'pin'].map((opt) => (
                        <button
                            key={opt}
                            className={`flex-1 px-3 py-2 rounded-lg border text-sm font-medium flex items-center justify-center space-x-2 me-1 ${type === opt
                                ? 'bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600'
                                : 'bg-white border-gray-200 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
                                }`}
                            onClick={() => setType(opt)}
                        >
                            {opt === 'random' && <FaRandom />}
                            {opt === 'memorable' && <FaLightbulb />}
                            {opt === 'pin' && <FaHashtag />}
                            <span className="capitalize">{t(`password_generator.${opt}`)}</span>
                        </button>
                    ))}
                </div>

                {/* Length slider */}
                <div className="mb-4">
                    <label className="block mb-1 font-medium">{t('password_generator.characters')}</label>
                    <div className="flex items-center space-x-3">
                        <input
                            type="range"
                            min={4}
                            max={100}
                            value={length}
                            onChange={(e) => setLength(parseInt(e.target.value))}
                            className="flex-1"
                        />
                        <span className="w-12 text-right">{length}</span>
                    </div>
                </div>

                {/* Toggles for random */}
                {type === 'random' && (
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-2 mb-4">
                        <ToggleSwitch
                            label={t('password_generator.numbers')}
                            enabled={includeNumbers}
                            onToggle={() => setIncludeNumbers(!includeNumbers)}
                        />
                        <ToggleSwitch
                            label={t('password_generator.symbols')}
                            enabled={includeSymbols}
                            onToggle={() => setIncludeSymbols(!includeSymbols)}
                        />
                    </div>
                )}

                {/* Output */}
                <div className="mb-4">
                    <label className="block mb-1 font-medium">{t('password_generator.generated')}</label>
                    <div className="bg-gray-100 rounded px-3 py-2 text-lg font-mono break-all dark:bg-gray-700">
                        {password}
                    </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-2">
                    <button
                        onClick={copyToClipboard}
                        className="w-full sm:flex-1 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center justify-center space-x-2"
                    >
                        <FaRegCopy /> <span>{t('password_generator.copied')}</span>
                    </button>
                    <button
                        onClick={refreshPassword}
                        className="w-full sm:flex-1 border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 flex items-center justify-center space-x-2"
                    >
                        <FaRedo /> <span>{t('password_generator.refresh')}</span>
                    </button>
                </div>
            </div>
        </div>

    );
};

const ToggleSwitch = ({ label, enabled, onToggle }) => (
    <div className="flex items-center space-x-3">
        <span className="text-sm font-medium">{label}</span>
        <button
            onClick={onToggle}
            className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${enabled ? 'bg-blue-600' : 'bg-gray-300'
                }`}
        >
            <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${enabled ? 'translate-x-5' : 'translate-x-0'
                    }`}
            ></div>
        </button>
    </div>
);

export default PasswordGenerator;
