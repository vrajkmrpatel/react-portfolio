// Cache utility for API responses
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export const getCachedData = (key) => {
    try {
        const cached = localStorage.getItem(key);
        if (!cached) return null;

        const { data, timestamp } = JSON.parse(cached);
        if (Date.now() - timestamp > CACHE_DURATION) {
            localStorage.removeItem(key);
            return null;
        }
        return data;
    } catch (error) {
        console.error('Error reading from cache:', error);
        return null;
    }
};

export const setCachedData = (key, data) => {
    try {
        localStorage.setItem(key, JSON.stringify({
            data,
            timestamp: Date.now()
        }));
    } catch (error) {
        console.error('Error writing to cache:', error);
    }
};

export const clearCache = (key) => {
    try {
        if (key) {
            localStorage.removeItem(key);
        } else {
            // Clear all cache items
            const keys = Object.keys(localStorage);
            keys.forEach(k => {
                if (k.startsWith('cache_')) {
                    localStorage.removeItem(k);
                }
            });
        }
    } catch (error) {
        console.error('Error clearing cache:', error);
    }
};
