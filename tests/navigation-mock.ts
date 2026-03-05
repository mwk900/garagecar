type NavigationState = {
  pathname: string;
  searchParams: URLSearchParams;
};

const state: NavigationState = {
  pathname: '/',
  searchParams: new URLSearchParams()
};

export function getMockPathname() {
  return state.pathname;
}

export function getMockSearchParams() {
  return state.searchParams;
}

export function setMockPathname(pathname: string) {
  state.pathname = pathname;
}

export function setMockSearchParams(value: string) {
  state.searchParams = new URLSearchParams(value);
}

export function resetMockNavigation() {
  state.pathname = '/';
  state.searchParams = new URLSearchParams();
}
