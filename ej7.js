function getGrade(score){
    if (score >= 0 && score <= 40) {
        return 'D';
    } else if (score >= 41 && score <= 60) {
        return 'R';
    } else if (score >= 61 && score <= 74) {
        return 'B';
    } else if (score >= 75 && score <= 84) {
        return 'BMB';
    } else if (score >= 85 && score <= 96) {
        return 'MB';
    } else if (score >= 97 && score <= 100) {
        return 'S';
    } else {
        return 'Score inválido';
    }
}
console.log(getGrade(86));
console.log(getGrade(102));