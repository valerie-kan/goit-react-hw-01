import css from './TransactionHistory.module.css'

function TransactionHistory({items}) {
    return (
<table>
    <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
    </thead>

    <tbody>{items.map(item => {
      return (
    <tr className={css.tableRange} key={item.id}>
      <td className={css.transactionName}>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
      )
    })
    }
    </tbody>
</table>
    )
}

export default TransactionHistory