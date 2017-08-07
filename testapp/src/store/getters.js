// check if current path is /auth/*
export const isAuthPage = ({ route }) => route.path.indexOf('/auth') !== -1

export const navigationTitle = state => state.navigationTitle

export const displayBlocks = state => state.displayBlocks

export const showNavigationBar = state => state.showNavigationBar

export const workspace = state => state.workspace
