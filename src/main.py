from fastapi import FastAPI

# Import all modules
from speech_capture import capture_speech
from argument_analyzer import analyze_argument
from decision_engine import resolve_conflict
from validation_layer import validate_decision
from code_generator import generate_code
from explain_engine import explain_code

app = FastAPI()


@app.get("/")
def home():
    return {"message": "Speech2Logic Backend Running"}


@app.get("/run")
def run_all_modules():

    print("🎤 Speech2Logic AI System Started")

    # 1 Capture speech
    speech_text = capture_speech()
    print("Captured Speech:", speech_text)

    # 2 Analyze argument
    arguments = analyze_argument(speech_text)
    print("Arguments:", arguments)

    # 3 Resolve conflict / decision
    decision = resolve_conflict(arguments)
    print("Decision:", decision)

    # 4 Validate decision
    validated = validate_decision(decision)
    print("Validated:", validated)

    # 5 Generate code
    code = generate_code(validated)
    print("Generated Code:", code)

    # 6 Explain code
    explanation = explain_code(code)
    print("Explanation:", explanation)

    return {
        "speech": speech_text,
        "arguments": arguments,
        "decision": decision,
        "validated": validated,
        "generated_code": code,
        "explanation": explanation
    }


# Run from terminal
def main():

    print("🎤 Speech2Logic System Running")

    speech_text = capture_speech()
    arguments = analyze_argument(speech_text)
    decision = resolve_conflict(arguments)
    validated = validate_decision(decision)
    code = generate_code(validated)
    explanation = explain_code(code)

    print("\nGenerated Code:\n", code)
    print("\nExplanation:\n", explanation)


if __name__ == "__main__":
    main()