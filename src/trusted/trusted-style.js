import styled from "styled-components";

export const TrustedStyle = styled.div`
  text-align: center;
  padding: 40px 20px;

  h1 {
    margin-bottom: 50px;
    font-size: 40px;
    font-weight: 700;
  }

  .parent {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 30px;
  }

  .child {
    width: 230px;
    height: 220px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 6px 12px rgba(0,0,0,0.15);
    padding-top: 40px;
    position: relative;
    transition: 0.3s ease;
  }

  .child:hover {
    transform: translateY(-8px);
    box-shadow: 0 18px 28px rgba(0,0,0,0.16);
  }

  /* Numbers */
  .numbers {
    font-size: 38px;
    font-weight: 700;
    color: #7a7a7a;
  }

  /* Labels */
  .details {
    margin-top: 6px;
    font-size: 16px;
    color: #7a7a7a;
    font-weight: 500;
  }

  /* Circular badge above card */
  .badge {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: white;
    position: absolute;
    top: -35px;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 26px;
  }

  /* Bottom colored strips */
  .bottom-strip {
    position: absolute;
    bottom: 0;
    width: 105%;
    height: 100px;
    border-radius: 0 0 12px 12px;
  }

  .strip1 { background: #00c5be; }
  .strip2 { background: #00b7ff; }
  .strip3 { background: #f0a63a; }
  .strip4 { background: #ff4b4b; }
`;
