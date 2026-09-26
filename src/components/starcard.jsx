export default function StarCard({ label, value, trend }) {
       return (
              <div className="panel stat-card">
                     <div className="stat-label">{label}</div>
                     <div className="stat-value">{value}</div>
                     <div className="stat-trend">{trend}</div>
              </div>
       );
}
