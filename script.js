* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background: #111827;
    color: white;
    min-height: 100vh;
}

header {
    background: #1f2937;
    padding: 20px;
    text-align: center;
    border-bottom: 2px solid #374151;
}

header h1 {
    margin-bottom: 8px;
}

main {
    max-width: 1000px;
    margin: 30px auto;
    padding: 20px;
}

.form-section,
.catalog-section {
    background: #1f2937;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
}

h2 {
    margin-bottom: 15px;
}

form {
    display: grid;
    gap: 10px;
}

input {
    padding: 12px;
    border: none;
    border-radius: 6px;
    background: #374151;
    color: white;
}

input::placeholder {
    color: #cbd5e1;
}

button {
    padding: 12px;
    border: none;
    border-radius: 6px;
    background: #2563eb;
    color: white;
    cursor: pointer;
    font-weight: bold;
}

button:hover {
    background: #1d4ed8;
}

.pc-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 15px;
}

.pc-card {
    background: #374151;
    padding: 15px;
    border-radius: 8px;
}

.pc-card h3 {
    margin-bottom: 10px;
    color: #60a5fa;
}

.pc-card p {
    margin-bottom: 5px;
}
