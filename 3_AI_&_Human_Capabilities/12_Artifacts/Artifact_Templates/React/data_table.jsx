export default function DataTable() {
  const [data, setData] = React.useState([
    { id: 1, name: 'Alice Johnson', role: 'Product Manager', department: 'Product', salary: 95000, startDate: '2022-01-15' },
    { id: 2, name: 'Bob Smith', role: 'Software Engineer', department: 'Engineering', salary: 105000, startDate: '2021-06-20' },
    { id: 3, name: 'Carol White', role: 'Designer', department: 'Design', salary: 85000, startDate: '2022-03-10' },
    { id: 4, name: 'David Brown', role: 'Marketing Manager', department: 'Marketing', salary: 90000, startDate: '2022-09-01' },
    { id: 5, name: 'Emma Wilson', role: 'Sales Representative', department: 'Sales', salary: 75000, startDate: '2023-01-05' },
    { id: 6, name: 'Frank Davis', role: 'Data Analyst', department: 'Analytics', salary: 88000, startDate: '2022-05-15' }
  ]);

  const [sortBy, setSortBy] = React.useState('name');
  const [sortOrder, setSortOrder] = React.useState('asc');
  const [filterDept, setFilterDept] = React.useState('');
  const [searchTerm, setSearchTerm] = React.useState('');

  const departments = ['', ...new Set(data.map(d => d.department))];

  // Filter and sort data
  const filtered = data
    .filter(item => {
      const matchSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.role.toLowerCase().includes(searchTerm.toLowerCase());
      const matchDept = !filterDept || item.department === filterDept;
      return matchSearch && matchDept;
    })
    .sort((a, b) => {
      let aVal = a[sortBy];
      let bVal = b[sortBy];

      if (typeof aVal === 'string') {
        aVal = aVal.toLowerCase();
        bVal = bVal.toLowerCase();
      }

      if (aVal < bVal) return sortOrder === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('asc');
    }
  };

  const SortIcon = ({ column }) => {
    if (sortBy !== column) return <span style={{ opacity: 0.3 }}>⇅</span>;
    return <span>{sortOrder === 'asc' ? '↑' : '↓'}</span>;
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#333', marginBottom: '30px' }}>Employee Directory</h1>

      {/* Filters Section */}
      <div style={{
        background: '#f8f9ff',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '20px',
        border: '1px solid #e0e0e0',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '15px'
      }}>
        <div>
          <label style={{ display: 'block', marginBottom: '6px', color: '#666', fontWeight: 'bold', fontSize: '12px' }}>
            Search by Name or Role
          </label>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
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
          <label style={{ display: 'block', marginBottom: '6px', color: '#666', fontWeight: 'bold', fontSize: '12px' }}>
            Filter by Department
          </label>
          <select
            value={filterDept}
            onChange={(e) => setFilterDept(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '14px'
            }}
          >
            {departments.map(dept => (
              <option key={dept} value={dept}>
                {dept || 'All Departments'}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '6px', color: '#666', fontWeight: 'bold', fontSize: '12px' }}>
            Results
          </label>
          <div style={{
            padding: '10px',
            background: 'white',
            borderRadius: '4px',
            border: '1px solid #ddd',
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#667eea'
          }}>
            {filtered.length} of {data.length}
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div style={{ overflowX: 'auto', borderRadius: '8px', border: '1px solid #e0e0e0', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          backgroundColor: 'white'
        }}>
          <thead>
            <tr style={{ backgroundColor: '#f8f9ff', borderBottom: '2px solid #e0e0e0' }}>
              <th
                style={{
                  padding: '12px 16px',
                  textAlign: 'left',
                  color: '#666',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  userSelect: 'none',
                  fontSize: '13px'
                }}
                onClick={() => handleSort('name')}
              >
                Name <SortIcon column="name" />
              </th>
              <th
                style={{
                  padding: '12px 16px',
                  textAlign: 'left',
                  color: '#666',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  userSelect: 'none',
                  fontSize: '13px'
                }}
                onClick={() => handleSort('role')}
              >
                Role <SortIcon column="role" />
              </th>
              <th
                style={{
                  padding: '12px 16px',
                  textAlign: 'left',
                  color: '#666',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  userSelect: 'none',
                  fontSize: '13px'
                }}
                onClick={() => handleSort('department')}
              >
                Department <SortIcon column="department" />
              </th>
              <th
                style={{
                  padding: '12px 16px',
                  textAlign: 'right',
                  color: '#666',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  userSelect: 'none',
                  fontSize: '13px'
                }}
                onClick={() => handleSort('salary')}
              >
                Salary <SortIcon column="salary" />
              </th>
              <th
                style={{
                  padding: '12px 16px',
                  textAlign: 'left',
                  color: '#666',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  userSelect: 'none',
                  fontSize: '13px'
                }}
                onClick={() => handleSort('startDate')}
              >
                Start Date <SortIcon column="startDate" />
              </th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan="5" style={{ padding: '40px', textAlign: 'center', color: '#999' }}>
                  No results found
                </td>
              </tr>
            ) : (
              filtered.map((row, idx) => (
                <tr
                  key={row.id}
                  style={{
                    borderBottom: '1px solid #f0f0f0',
                    backgroundColor: idx % 2 === 0 ? '#ffffff' : '#fafafa',
                    transition: 'background-color 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f0f4ff'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = idx % 2 === 0 ? '#ffffff' : '#fafafa'}
                >
                  <td style={{ padding: '12px 16px', color: '#333', fontSize: '14px' }}>
                    <strong>{row.name}</strong>
                  </td>
                  <td style={{ padding: '12px 16px', color: '#666', fontSize: '14px' }}>
                    {row.role}
                  </td>
                  <td style={{ padding: '12px 16px', color: '#666', fontSize: '14px' }}>
                    <span style={{
                      display: 'inline-block',
                      background: '#e0e0e0',
                      padding: '4px 12px',
                      borderRadius: '12px',
                      fontSize: '12px',
                      fontWeight: 'bold'
                    }}>
                      {row.department}
                    </span>
                  </td>
                  <td style={{ padding: '12px 16px', color: '#667eea', fontSize: '14px', fontWeight: 'bold', textAlign: 'right' }}>
                    ${row.salary.toLocaleString()}
                  </td>
                  <td style={{ padding: '12px 16px', color: '#666', fontSize: '14px' }}>
                    {new Date(row.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Summary Stats */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '15px',
        marginTop: '20px'
      }}>
        <div style={{ background: '#f0f4ff', padding: '15px', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
          <div style={{ fontSize: '12px', color: '#666', marginBottom: '8px' }}>Average Salary</div>
          <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#667eea' }}>
            ${(filtered.reduce((sum, d) => sum + d.salary, 0) / (filtered.length || 1)).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </div>
        </div>

        <div style={{ background: '#f0f4ff', padding: '15px', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
          <div style={{ fontSize: '12px', color: '#666', marginBottom: '8px' }}>Total Salary</div>
          <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#667eea' }}>
            ${filtered.reduce((sum, d) => sum + d.salary, 0).toLocaleString()}
          </div>
        </div>

        <div style={{ background: '#f0f4ff', padding: '15px', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
          <div style={{ fontSize: '12px', color: '#666', marginBottom: '8px' }}>Employees</div>
          <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#667eea' }}>
            {filtered.length}
          </div>
        </div>
      </div>
    </div>
  );
}
