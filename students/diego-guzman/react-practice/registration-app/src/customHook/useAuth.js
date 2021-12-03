
export function useAuth() {
        return sessionStorage.getItem('user')!== null;
    }
    // JSON.parse(sessionStorage.getItem(mail))==='loged';

