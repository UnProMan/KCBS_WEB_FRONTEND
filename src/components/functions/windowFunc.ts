/**
 *
 * 앱 width 크기가 1024보다 큰 경우
 * PC화면으로 간주 
 * 
 */
export const isDeskTop = (): boolean => {
    const width = window.innerWidth;

    return width > 1024;
}