import { UNSPLASH_BASE_URL, UNSPLASH_COMMON_HEADERS } from "../config"

export async function getData(pathname, params) {
    const response = await fetch(`${UNSPLASH_BASE_URL}${pathname}?${params}`, {
        headers: {
            ...UNSPLASH_COMMON_HEADERS
        }
    }
    );
    return response.json();
}