export interface Alert {
    type: 'info' | 'error' | 'question';
    title: string;
    message: string;
}