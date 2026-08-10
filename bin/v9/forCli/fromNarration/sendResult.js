const sendResult = ({
    inputsFromUser,
    nextSteps
}) => {
    process.stdout.write(
        JSON.stringify({
            success: true,
            nextCommand: `cd ${inputsFromUser.raka}`,
            nextSteps
        }) + "\n"
    );
};

export default sendResult;