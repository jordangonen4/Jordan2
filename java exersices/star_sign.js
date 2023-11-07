function starSign(date) {
    const month = date.getMonth() + 1; 
    const day = date.getDate();
  
    if ((month === 1 && day >= 21) || (month === 2 && day <= 19)) {
      return "Aquarius";
    } else if ((month === 2 && day >= 20) || (month === 3 && day <= 20)) {
      return "Pisces";
    } else if ((month === 3 && day >= 21) || (month === 4 && day <= 20)) {
      return "Aries";
    } else if ((month === 4 && day >= 21) || (month === 5 && day <= 21)) {
      return "Taurus";
    } else if ((month === 5 && day >= 22) || (month === 6 && day <= 21)) {
      return "Gemini";
    } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
      return "Cancer";
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 23)) {
      return "Leo";
    } else if ((month === 8 && day >= 24) || (month === 9 && day <= 23)) {
      return "Virgo";
    } else if ((month === 9 && day >= 24) || (month === 10 && day <= 23)) {
      return "Libra";
    } else if ((month === 10 && day >= 24) || (month === 11 && day <= 22)) {
      return "Scorpio";
    } else if ((month === 11 && day >= 23) || (month === 12 && day <= 21)) {
      return "Sagittarius";
    } else {
      return "Capricorn";
    }
  }
  
  
  const date2 = new Date("2022-07-15");
  console.log(starSign(date2)); // "Cancer"
  