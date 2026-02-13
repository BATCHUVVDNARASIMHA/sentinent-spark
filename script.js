function showLogin() {
    document.getElementById("loginBox").classList.remove("hidden");
}

function login() {
    window.location.href = "dashboard.html";
}

function loadScenario(type) {
    const area = document.getElementById("simulationArea");

    let scenarioText = "";

    if (type === "feedback") {
        scenarioText = "You need to deliver difficult feedback about missed deadlines.";
    }
    if (type === "mistake") {
        scenarioText = "You need to admit a critical mistake to your team.";
    }
    if (type === "tension") {
        scenarioText = "You need to address growing tension between team members.";
    }

    area.innerHTML = `
        <div class="card">
            <h3>Scenario</h3>
            <p>${scenarioText}</p>

            <h3>AI Simulation</h3>
            <div class="response">
                Colleague: I felt overwhelmed and didn’t know how to ask for help.
            </div>

            <textarea id="userResponse" rows="3" placeholder="Type your response..."></textarea>
            <button onclick="coach()">Submit Response</button>
        </div>
    `;
}

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



