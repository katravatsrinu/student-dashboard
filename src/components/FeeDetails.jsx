import React from 'react';
import { Card, Table, Badge, Button } from 'react-bootstrap';

function FeeDetails() {
  const feeData = {
    totalFees: 12000,
    paidAmount: 8000,
    dueAmount: 4000,
    nextDueDate: '2024-03-30',
    transactions: [
      { id: 1, date: '2024-01-15', amount: 3000, status: 'Paid', type: 'Tuition Fee' },
      { id: 2, date: '2024-02-15', amount: 3000, status: 'Paid', type: 'Tuition Fee' },
      { id: 3, date: '2024-03-15', amount: 2000, status: 'Paid', type: 'Course Material' },
      { id: 4, date: '2024-04-15', amount: 4000, status: 'Pending', type: 'Tuition Fee' }
    ]
  };

  return (
    <div>
      <h1 className="dashboard-title">Fee Details</h1>
      <div className="row mb-4">s
        <div className="col-md-4">
          <Card className="text-center">
            <Card.Body>
              <h6 className="text-muted">Total Fees</h6>
              <h3>₹{feeData.totalFees}</h3>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card className="text-center">
            <Card.Body>
              <h6 className="text-muted">Paid Amount</h6>
              <h3 className="text-success">₹{feeData.paidAmount}</h3>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card className="text-center">
            <Card.Body>
              <h6 className="text-muted">Due Amount</h6>
              <h3 className="text-danger">₹{feeData.dueAmount}</h3>
            </Card.Body>
          </Card>
        </div>
      </div>

      <Card>
        <Card.Header>
          <h5 className="mb-0">Transaction History</h5>
        </Card.Header>
        <Card.Body>
          <Table responsive>
            <thead>
              <tr>
                <th>Date</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {feeData.transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td>{transaction.date}</td>
                  <td>{transaction.type}</td>
                  <td>₹{transaction.amount}</td>
                  <td>
                    <Badge bg={transaction.status === 'Paid' ? 'success' : 'warning'}>
                      {transaction.status}
                    </Badge>
                  </td>
                  <td>
                    {transaction.status === 'Paid' ? (
                      <Button variant="outline-primary" size="sm">Download Receipt</Button>
                    ) : (
                      <Button variant="primary" size="sm">Pay Now</Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
}

export default FeeDetails;