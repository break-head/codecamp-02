// 시저암호
//for 반복문, 대소문자 구분 X
const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function solution(s, n) {
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += s[i];
    } else {
      let index = alphabet.indexOf(s[i]);
      const upper = index >= 26 ? true : false;
      index += n;

      if (upper === true) {
        // 대문자일 경우
        index = index >= 52 ? index - alphabet.length / 2 : index;
      } else {
        index = index >= 26 ? index - alphabet.length / 2 : index;
      }

      answer += alphabet[index];
    }
  }

  return answer;
}

// for 반복문, 대소문자 구분 O

const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function solution(s, n) {
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += s[i];
    } else {
      const text = lower.includes(s[i]) ? lower : upper;
      let index = text.indexOf(s[i]) + n;
      if (index >= text.length) {
        index = index - text.length;
      }

      answer += text[index];
    }
  }

  return answer;
}

//map
const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function solution(s, n) {
  const result = s.split("").map((str) => {
    if (str === " ") {
      return str;
    }
    const text = lower.includes(str) === true ? lower : upper;
    let index = text.indexOf(str) + n;
    if (index >= text.length) {
      index = index - text.length;
    }

    return text[index];
  });
  return result.join("");
}
