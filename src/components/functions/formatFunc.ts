/**
 * yyyyMMdd로 받은 String 형식을
 * Date형식으로 변경
 */
export const formatDate = (str: String): Date => {
    return new Date(
        parseInt(str.substring(0, 4)),
        parseInt(str.substring(4, 6)) - 1, // 월은 0부터 시작하므로 1을 빼줌
        parseInt(str.substring(6, 8))
    );
};

/**
 * 전화번호 형식을
 * 010-0000-0000으로 변경
 */
export const formatPhoneNumber = (str: String): String =>
    str.substring(0, 3) + '-' + str.substring(3, 7) + '-' + str.substring(7, 11);

/**
 * 이미지 URL 생성
 */
export const formatImageURL = (str: string): string =>
    'https://lh3.googleusercontent.com/u/0/d/' + str;


/**
 * 날짜를 받으면 'yyyy년 M월 dd일 HH시 mm분 ss초'로 변경해주는 함수 
 */
export const formatDateTime = (date: Date): String => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const dayNum = date.getDate();
    const day = date.getDay();
    const week = ['일', '월', '화', '수', '목', '금', '토'];

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `${year}년 ${month < 10 ? `0${month}` : month}월 ${dayNum < 10 ? `0${dayNum}` : dayNum}일 ${week[day]}요일 ` +
    `${hours < 10 ? `0${hours}` : hours}시 ${minutes < 10 ? `0${minutes}` : minutes}분 ${seconds < 10 ? `0${seconds}` : seconds}초`;
}

/**
 * yyyy-MM-dd (date) 형식을 yyyy년 M월 d일로 변경
 */
export const formatString = (inputeDate: Date): string => {
    const date = new Date(inputeDate);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    
    return `${year}년 ${month}월 ${day}일`;
}