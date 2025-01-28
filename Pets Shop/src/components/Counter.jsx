import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

export const Counter = () => {
    const [count, setCount] = useState(10);
    
    const buy = () => {
        setCount(count - 1);
    };
    
    return (
      <div className="d-grid gap-2">
        <strong  style={{ marginTop: -17 }}>Quantity : {count}</strong >
        {count === 1 ? (
          <>
            <Button size="lg" variant="warning" onClick={buy}>
              Buy
            </Button>
            <div className="alert bg-warning mt-2 fw-semibold">
              Only one left in the stock
            </div>
          </>
        ) : count === 0 ? (
          <>
            <Button size="lg" variant="danger" disabled>
              Buy
            </Button>
            <div className="alert alert-danger mt-2 fw-semibold">
              Out of stock
            </div>
          </>
        ) : (
          <Button size="lg" variant="success" onClick={buy}>
            Buy
          </Button>
        )}
      </div>
    );
};
