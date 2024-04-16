const ScoreBar = ({ completed, predictWrong, predictCorrect }) => {
  
    const remainingSpace = 100 - completed;
    const additionalCorrect = predictCorrect - completed; 
    const predictCorrectWidth =
      additionalCorrect > remainingSpace ? remainingSpace : additionalCorrect;
  
    return (
      <div > 
        <div
          style={{
            padding: "2vw",
            position: "absolute",
            top: "83%",
            left: "16%",
            width: "70%",
            bottom: "0",
         
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "1.5rem",
            }}
          >
            <div>Score: {predictWrong}%</div>
            <div>Max Score: {predictCorrect}%</div>
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "7vh",
              border: "2px solid black",
              borderRadius: "8px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: 0,
                width: `${predictWrong}%`,
                height: "100%",
                backgroundColor: "black",
                zIndex: 100,
                color: "white",
                transition: "1s",
              }}
            ></div>
  
            <div
              style={{
                position: "absolute",
                left: 0,
                width: `${completed}%`,
                height: "100%",
                backgroundColor: "gray",
                zIndex: 3,
                transition: "1s",
              }}
            ></div>
  
            <div
              style={{
                position: "absolute",
                left: `${completed}%`,
                width: `${predictCorrectWidth}%`,
                height: "100%",
                backgroundColor: "lightgray",
                zIndex: 2,
                transition: "1s",
              }}
            ></div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ScoreBar;