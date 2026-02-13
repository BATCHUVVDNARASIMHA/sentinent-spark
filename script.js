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

    area.innerHTML += `
        <div class="response">
            <strong>Coaching Insight:</strong>
            Great validation. By acknowledging their experience before offering solutions, you reduced defensiveness and built trust.
        </div>
    `;
}
