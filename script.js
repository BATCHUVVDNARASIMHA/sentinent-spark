function coach() {
    const area = document.getElementById("simulationArea");
    const userResponse = document.getElementById("userResponse").value;

    area.innerHTML += `
        <div class="response">
            <strong>AI Processing...</strong>
            <div id="aiSteps"></div>
        </div>
    `;

    const steps = [
        "Analyzing intent and communication clarity...",
        "Detecting emotional tone and empathy signals...",
        "Mapping response to Trust, Empathy, and Vulnerability pillars...",
        "Generating coaching insight..."
    ];

    let index = 0;
    const aiStepsDiv = document.getElementById("aiSteps");

    const interval = setInterval(() => {
        if (index < steps.length) {
            aiStepsDiv.innerHTML += `<p>${steps[index]}</p>`;
            index++;
        } else {
            clearInterval(interval);
            aiStepsDiv.innerHTML += `
                <div class="response">
                    <strong>Coaching Insight:</strong>
                    Your response acknowledged their emotional state before addressing the issue. 
                    This builds psychological safety and reduces defensiveness.
                </div>
            `;
        }
    }, 1000);
}

