flowchart TD
    A[Start Component] --> B[Initialize State Variables]
    B --> C[useEffect - Component Mount]
    C --> D[Check User Authentication]
    
    D -->|User is logged in| E[Fetch User ID from Firestore]
    E --> F[Fetch HSK Data from Firestore]
    F --> G[Generate Questions]
    D -->|User is not logged in| H[Display "User is not logged in"]
    
    F --> I{Data Loaded?}
    I -->|Yes| J[Display First Question]
    I -->|No| K[Display Loading Screen]

    J --> L{User Answers Question}
    L -->|Correct| M[Increment Score]
    M --> N[Update Correct Words List]
    N --> O[Display Correct Answer Circle]
    L -->|Incorrect| P[Update Mistake Count in Firestore]
    P --> Q[Update Incorrect Words List]
    Q --> R[Display Incorrect Answer Cross]
    
    O --> S[Move to Next Question]
    R --> S
    S --> T{More Questions?}
    T -->|Yes| J
    T -->|No| U[Calculate Results]
    U --> V[Display Results]
    V --> W[Prompt for Retry]
    W -->|Retry| X[Reset Quiz State]
    X --> G
