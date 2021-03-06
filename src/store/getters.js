// check if current path is /auth/*
export const isAuthPage = ({ route }) => route.path ? route.path.indexOf('/auth') !== -1 : false

// check if navigation should be displayed
// if route.path does not exist yet returns false
export const shouldShowNavigation = ({ route }, getters) => (route.path ? !getters.isAuthPage : false);
