export function saveScore(score: number): void {
    window.localStorage.clear();
    window.localStorage.setItem('score', score.toString());
}

export function getScore(): number {
    const score = window.localStorage.getItem('score');

    if (score === undefined || score === null) {
        return 0;
    }

    return Number(score);
}