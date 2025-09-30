export default function ExpenseTracker() {
  const [expenses, setExpenses] = React.useState([]);
  const [description, setDescription] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const [category, setCategory] = React.useState('Food');

  const categories = ['Food', 'Transport', 'Entertainment', 'Utilities', 'Other'];

  const addExpense = () => {
    if (!description.trim() || !amount) {
      alert('Please enter description and amount');
      return;
    }

    const newExpense = {
      id: Date.now(),
      description: description.trim(),
      amount: parseFloat(amount),
      category: category,
      date: new Date().toLocaleDateString()
    };

    setExpenses([newExpense, ...expenses]);
    setDescription('');
    setAmount('');
    setCategory('Food');
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(e => e.id !== id));
  };

  const totalExpenses = expenses.reduce((sum, e) => sum + e.amount, 0);
  const categoryTotals = categories.map(cat => ({
    category: cat,
    total: expenses
      .filter(e => e.category === cat)
      .reduce((sum, e) => sum + e.amount, 0)
  }));

  const highestExpense = expenses.length > 0
    ? expenses.reduce((max, e) => e.amount > max.amount ? e : max)
    : null;

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#333', marginBottom: '30px' }}>Expense Tracker</h1>

      {/* Input Section */}
      <div style={{
        background: '#f8f9ff',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '30px',
        border: '1px solid #e0e0e0'
      }}>
        <h2 style={{ fontSize: '18px', marginBottom: '15px', color: '#555' }}>Add Expense</h2>

        <div style={{ display: 'grid', gap: '15px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', color: '#666', fontWeight: 'bold' }}>
              Description
            </label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="e.g., Lunch, Gas, Movie..."
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '14px'
              }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', color: '#666', fontWeight: 'bold' }}>
                Amount
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                step="0.01"
                min="0"
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '14px'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '5px', color: '#666', fontWeight: 'bold' }}>
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '14px'
                }}
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>

          <button
            onClick={addExpense}
            style={{
              padding: '12px 24px',
              background: '#667eea',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'background 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.background = '#5568d3'}
            onMouseOut={(e) => e.target.style.background = '#667eea'}
          >
            Add Expense
          </button>
        </div>
      </div>

      {/* Summary Section */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px', marginBottom: '30px' }}>
        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '20px',
          borderRadius: '8px'
        }}>
          <div style={{ fontSize: '12px', opacity: 0.9, marginBottom: '8px' }}>Total Expenses</div>
          <div style={{ fontSize: '32px', fontWeight: 'bold' }}>${totalExpenses.toFixed(2)}</div>
        </div>

        {highestExpense && (
          <div style={{
            background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            color: 'white',
            padding: '20px',
            borderRadius: '8px'
          }}>
            <div style={{ fontSize: '12px', opacity: 0.9, marginBottom: '8px' }}>Highest Expense</div>
            <div style={{ fontSize: '20px', fontWeight: 'bold' }}>${highestExpense.amount.toFixed(2)}</div>
            <div style={{ fontSize: '12px', opacity: 0.9 }}>{highestExpense.description}</div>
          </div>
        )}

        <div style={{
          background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
          color: 'white',
          padding: '20px',
          borderRadius: '8px'
        }}>
          <div style={{ fontSize: '12px', opacity: 0.9, marginBottom: '8px' }}>Total Entries</div>
          <div style={{ fontSize: '32px', fontWeight: 'bold' }}>{expenses.length}</div>
        </div>
      </div>

      {/* Category Breakdown */}
      <div style={{
        background: '#f8f9ff',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '30px',
        border: '1px solid #e0e0e0'
      }}>
        <h2 style={{ fontSize: '18px', marginBottom: '15px', color: '#555' }}>By Category</h2>
        <div style={{ display: 'grid', gap: '10px' }}>
          {categoryTotals.map(cat => (
            <div key={cat.category} style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '10px',
              background: 'white',
              borderRadius: '4px',
              border: '1px solid #eee'
            }}>
              <span>{cat.category}</span>
              <span style={{ fontWeight: 'bold', color: '#667eea' }}>${cat.total.toFixed(2)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Expense List */}
      <div>
        <h2 style={{ fontSize: '18px', marginBottom: '15px', color: '#555' }}>Recent Expenses</h2>

        {expenses.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '40px 20px',
            color: '#999',
            background: '#f8f9ff',
            borderRadius: '8px'
          }}>
            No expenses yet. Add one to get started!
          </div>
        ) : (
          <div style={{ display: 'grid', gap: '10px' }}>
            {expenses.map(expense => (
              <div
                key={expense.id}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '15px',
                  background: 'white',
                  border: '1px solid #e0e0e0',
                  borderRadius: '8px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                }}
              >
                <div>
                  <div style={{ fontWeight: 'bold', color: '#333', marginBottom: '4px' }}>
                    {expense.description}
                  </div>
                  <div style={{ fontSize: '12px', color: '#999' }}>
                    {expense.category} • {expense.date}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <div style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#667eea',
                    minWidth: '80px',
                    textAlign: 'right'
                  }}>
                    ${expense.amount.toFixed(2)}
                  </div>

                  <button
                    onClick={() => deleteExpense(expense.id)}
                    style={{
                      padding: '6px 12px',
                      background: '#ff6b6b',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      transition: 'background 0.3s ease'
                    }}
                    onMouseOver={(e) => e.target.style.background = '#ee5a52'}
                    onMouseOut={(e) => e.target.style.background = '#ff6b6b'}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
