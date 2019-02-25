export const ConsoleStyle = `
    background: #224422; 
    color: lime; 
    font-family: monospace; 
    font-size: 20px;
    border-radius: 10px;
`;

export function initEnv(){
    console.log('%c Good luck, candidate! ', ConsoleStyle);
}