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