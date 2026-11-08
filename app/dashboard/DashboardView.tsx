
"use client";

const stats = [
  { title: "Bookings", value: "281", change: "+55%", icon: "▣", color: "dark" },
  { title: "Today's Users", value: "2,300", change: "+3%", icon: "▥", color: "blue" },
  { title: "Revenue", value: "34k", change: "+1%", icon: "▤", color: "green" },
  { title: "Followers", value: "+91", change: "Just updated", icon: "♟", color: "pink" },
];

const projects = [
  { name: "Material UI XD Version", members: "👩🏻 👨🏻 👩🏽", budget: "$14,000", progress: 65, color: "blue" },
  { name: "Add Progress Track", members: "👨🏻 👩🏻", budget: "$3,000", progress: 12, color: "blue" },
  { name: "Fix Platform Errors", members: "👩🏻 👨🏻", budget: "Not set", progress: 100, color: "green" },
  { name: "Launch our Mobile App", members: "👨🏻 👩🏻 👩🏽", budget: "$20,500", progress: 100, color: "green" },
  { name: "Add the New Pricing Page", members: "👨🏻", budget: "$500", progress: 25, color: "blue" },
  { name: "Redesign New Online Shop", members: "👩🏻 👨🏻", budget: "$2,000", progress: 40, color: "blue" },
];

const orders = [
  { title: "$2400, Design changes", date: "22 DEC 7:20 PM", icon: "♟", color: "green" },
  { title: "New order #1832412", date: "21 DEC 11 PM", icon: "▣", color: "red" },
  { title: "Server payments for April", date: "21 DEC 9:34 PM", icon: "🛒", color: "blue" },
  { title: "New card added for order #4395133", date: "20 DEC 2:20 AM", icon: "▤", color: "orange" },
  { title: "New card added for order #4395133", date: "18 DEC 4:54 AM", icon: "♥", color: "pink" },
];

export default function DashboardOverview() {
  return (
    <main className="dashboard-overview">

      <style jsx>{`
        .dashboard-overview {
          width: 100%;
          min-height: 100vh;
          padding: 26px;
          background: #f0f2f5;
          color: #344767;
          font-family: Arial, sans-serif;
          box-sizing: border-box;
        }

        .dashboard-overview * { box-sizing: border-box; }

        .dashboard-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          gap: 15px;
        }

        .breadcrumb { color: #8392ab; font-size: 13px; }
        .dashboard-header h2 { font-size: 20px; margin: 8px 0 0; }

        .header-tools { display: flex; align-items: center; gap: 18px; }
        .header-tools input {
          border: 1px solid #d2d6da;
          border-radius: 9px;
          padding: 12px;
          width: 160px;
          background: transparent;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 20px;
          margin-bottom: 25px;
        }

        .stat-card {
          background: white;
          border-radius: 13px;
          padding: 23px 18px;
          min-height: 118px;
          box-shadow: 0 3px 8px rgba(0,0,0,.08);
          position: relative;
          display: flex;
          justify-content: flex-end;
          flex-direction: column;
        }

        .stat-icon {
          position: absolute;
          top: -13px;
          left: 16px;
          width: 55px;
          height: 55px;
          border-radius: 12px;
          display: grid;
          place-items: center;
          color: white;
          font-size: 25px;
          box-shadow: 0 5px 12px rgba(0,0,0,.17);
        }

        .stat-card p { text-align: right; color: #8392ab; margin: 0 0 5px; font-size: 13px; }
        .stat-card h3 { text-align: right; font-size: 22px; margin: 0; }
        .stat-change { margin-top: 22px; color: #7b809a; font-size: 12px; }
        .stat-change strong { color: #4caf50; }

        .dark { background: #252525; }
        .blue { background: #2785e8; }
        .green { background: #4caf50; }
        .pink { background: #e91e63; }
        .red { background: #f44336; }
        .orange { background: #fb8c00; }

        .charts-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
          margin-bottom: 25px;
        }

        .chart-card {
          background: white;
          border-radius: 13px;
          padding: 0 15px 20px;
          box-shadow: 0 3px 8px rgba(0,0,0,.08);
          overflow: hidden;
        }

        .chart-visual {
          height: 175px;
          border-radius: 10px;
          margin-top: -1px;
          padding: 12px;
          box-shadow: 0 5px 12px rgba(0,0,0,.15);
        }

        .chart-visual svg { width: 100%; height: 100%; overflow: visible; }
        .chart-visual text { fill: white; font-size: 11px; }
        .chart-visual .gridline { stroke: rgba(255,255,255,.23); stroke-dasharray: 4 4; }
        .chart-visual .line { fill: none; stroke: white; stroke-width: 3; }
        .chart-visual .point { fill: white; }

        .chart-card h3 { font-size: 15px; margin: 22px 5px 5px; }
        .chart-card p { font-size: 12px; color: #8392ab; margin: 5px; }

        .bottom-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 20px;
        }

        .panel {
          background: white;
          border-radius: 13px;
          padding: 22px;
          box-shadow: 0 3px 8px rgba(0,0,0,.08);
          min-width: 0;
        }

        .panel-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }

        .panel-header h3 { font-size: 16px; margin: 0; }
        .panel-subtitle { color: #8392ab; font-size: 12px; margin: 10px 0 25px; }

        .project-table { width: 100%; border-collapse: collapse; text-align: left; }
        .project-table th {
          color: #8392ab;
          font-size: 10px;
          padding: 14px 7px;
          border-bottom: 1px solid #eee;
        }

        .project-table td {
          padding: 17px 7px;
          border-bottom: 1px solid #eee;
          font-size: 12px;
          font-weight: 600;
        }

        .project-table td:first-child { min-width: 180px; }
        .members { white-space: nowrap; }
        .progress-track {
          width: 100%;
          height: 5px;
          background: #e9ecef;
          border-radius: 10px;
          min-width: 65px;
        }
        .progress-fill { height: 100%; border-radius: 10px; }

        .orders-growth { color: #4caf50; font-size: 13px; margin: 12px 0 25px; }

        .order-item {
          display: flex;
          gap: 13px;
          position: relative;
          padding-bottom: 23px;
        }

        .order-item:not(:last-child)::after {
          content: "";
          position: absolute;
          left: 17px;
          top: 35px;
          bottom: 0;
          width: 2px;
          background: #e9ecef;
        }

        .order-icon {
          flex-shrink: 0;
          width: 35px;
          height: 35px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          color: white;
        }

        .order-item h4 { font-size: 12px; margin: 3px 0 6px; }
        .order-item p { color: #8392ab; font-size: 10px; margin: 0; }

        .dashboard-footer {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 15px;
          padding: 22px 5px;
          color: #8392ab;
          font-size: 12px;
        }

        .footer-links { display: flex; gap: 22px; }

        @media(max-width: 1100px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          .charts-grid { grid-template-columns: repeat(2, 1fr); }
          .charts-grid .chart-card:last-child { grid-column: span 2; }
          .bottom-grid { grid-template-columns: 1fr; }
        }

        @media(max-width: 650px) {
          .dashboard-overview { padding: 15px; }
          .stats-grid { gap: 22px 12px; }
          .stat-card { padding: 20px 12px; }
          .stat-icon { width: 43px; height: 43px; font-size: 19px; }
          .stat-card h3 { font-size: 18px; }
          .charts-grid { grid-template-columns: 1fr; }
          .charts-grid .chart-card:last-child { grid-column: auto; }
          .chart-visual { height: 180px; }
          .header-tools input { width: 115px; }
          .project-table { min-width: 620px; }
          .table-scroll { overflow-x: auto; }
          .panel { padding: 15px; }
        }
      `}</style>

      {/* HEADER */}
      <header className="dashboard-header">
        <div>
          <div className="breadcrumb">⌂ / Dashboard</div>
          <h2>Dashboard</h2>
        </div>
        <div className="header-tools">
          <input placeholder="Search here..." />
          <span>◉</span>
          <span>⚙</span>
          <span>♟</span>
        </div>
      </header>

      {/* STATISTICS */}
      <section className="stats-grid">
        {stats.map((stat) => (
          <article className="stat-card" key={stat.title}>
            <div className={`stat-icon ${stat.color}`}>{stat.icon}</div>
            <p>{stat.title}</p>
            <h3>{stat.value}</h3>
            <div className="stat-change">
              {stat.change.startsWith("+") ? (
                <strong>{stat.change}</strong>
              ) : null}
              {stat.change.startsWith("+") ? " than last period" : stat.change}
            </div>
          </article>
        ))}
      </section>

      {/* CHARTS */}
      <section className="charts-grid">

        {/* BAR CHART */}
        <article className="chart-card">
          <div className="chart-visual blue">
            <svg viewBox="0 0 320 145" preserveAspectRatio="none">
              {[20, 50, 80, 110].map(y => (
                <line key={y} x1="25" y1={y} x2="310" y2={y} className="gridline" />
              ))}
              {[0, 1, 2, 3, 4, 5].map((v, i) => (
                <g key={v}>
                  <rect x={42 + i * 48} y={112 - [65, 24, 10, 27, 65, 15][i]}
                    width="5" height={[65, 24, 10, 27, 65, 15][i]}
                    rx="3" fill="white" />
                  <text x={44 + i * 48} y="135" textAnchor="middle">
                    {"MTWTF S"[i]}
                  </text>
                </g>
              ))}
              {[0, 20, 40, 60].map((v, i) => (
                <text key={v} x="2" y={115 - i * 30}>{v}</text>
              ))}
            </svg>
          </div>
          <h3>Website Views</h3>
          <p>Last Campaign Performance</p>
          <hr style={{ border: 0, borderTop: "1px solid #eee", margin: "18px 5px" }} />
          <p>◷ Campaign sent 2 days ago</p>
        </article>

        {/* SALES CHART */}
        <article className="chart-card">
          <div className="chart-visual green">
            <svg viewBox="0 0 320 145" preserveAspectRatio="none">
              {[20, 50, 80, 110].map(y => (
                <line key={y} x1="25" y1={y} x2="310" y2={y} className="gridline" />
              ))}
              <polyline className="line"
                points="25,105 65,106 105,65 145,62 185,35 225,59 265,78 310,72" />
              {[[25,105],[65,106],[105,65],[145,62],[185,35],[225,59],[265,78],[310,72]].map(([x,y], i) => (
                <circle key={i} cx={x} cy={y} r="4" className="point" />
              ))}
              {["Apr","May","Jun","Jul","Aug","Sep","Oct"].map((m,i) => (
                <text key={m} x={25 + i * 45} y="135" textAnchor="middle">{m}</text>
              ))}
              {[0,200,400,600].map((v,i) => (
                <text key={v} x="2" y={115-i*30}>{v}</text>
              ))}
            </svg>
          </div>
          <h3>Daily Sales</h3>
          <p><strong>(+15%)</strong> increase in today sales.</p>
          <hr style={{ border: 0, borderTop: "1px solid #eee", margin: "18px 5px" }} />
          <p>◷ Updated 4 min ago</p>
        </article>

        {/* TASKS CHART */}
        <article className="chart-card">
          <div className="chart-visual dark">
            <svg viewBox="0 0 320 145" preserveAspectRatio="none">
              {[20, 50, 80, 110].map(y => (
                <line key={y} x1="25" y1={y} x2="310" y2={y} className="gridline" />
              ))}
              <polyline className="line"
                points="25,105 65,106 105,65 145,77 185,35 225,72 265,50 310,78" />
              {[[25,105],[65,106],[105,65],[145,77],[185,35],[225,72],[265,50],[310,78]].map(([x,y], i) => (
                <circle key={i} cx={x} cy={y} r="4" className="point" />
              ))}
              {["Apr","May","Jun","Jul","Aug","Sep","Oct"].map((m,i) => (
                <text key={m} x={25 + i * 45} y="135" textAnchor="middle">{m}</text>
              ))}
              {[0,200,400,600].map((v,i) => (
                <text key={v} x="2" y={115-i*30}>{v}</text>
              ))}
            </svg>
          </div>
          <h3>Completed Tasks</h3>
          <p>Last Campaign Performance</p>
          <hr style={{ border: 0, borderTop: "1px solid #eee", margin: "18px 5px" }} />
          <p>◷ Just updated</p>
        </article>
      </section>

      {/* PROJECTS + ORDERS */}
      <section className="bottom-grid">

        <article className="panel">
          <div className="panel-header">
            <h3>Projects</h3>
            <span>⋮</span>
          </div>
          <p className="panel-subtitle">✓ 30 done this month</p>

          <div className="table-scroll">
            <table className="project-table">
              <thead>
                <tr>
                  <th>COMPANIES</th>
                  <th>MEMBERS</th>
                  <th>BUDGET</th>
                  <th>COMPLETION</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr key={project.name}>
                    <td>{project.name}</td>
                    <td className="members">{project.members}</td>
                    <td>{project.budget}</td>
                    <td>
                      <div className="progress-track">
                        <div
                          className={`progress-fill ${project.color}`}
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <article className="panel">
          <h3>Orders overview</h3>
          <p className="orders-growth">↑ 24% this month</p>

          {orders.map((order) => (
            <div className="order-item" key={order.title + order.date}>
              <div className={`order-icon ${order.color}`}>
                {order.icon}
              </div>
              <div>
                <h4>{order.title}</h4>
                <p>{order.date}</p>
              </div>
            </div>
          ))}
        </article>

      </section>

      {/* FOOTER */}
      <footer className="dashboard-footer">
        <span>© 2026, made with ♥ for a better web.</span>
        <div className="footer-links">
          <span>About Us</span>
          <span>Blog</span>
          <span>License</span>
        </div>
      </footer>

    </main>
  );
}
