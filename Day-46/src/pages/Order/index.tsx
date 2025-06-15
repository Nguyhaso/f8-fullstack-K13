import {FTable, FHeader, ColorDialog, SearchBar} from '../../components'
import {Color, Header, Order} from '../../utils'
import {Box} from "@mui/material";
import {useState, useCallback} from "react";
import {useSelector} from "react-redux";
import store, {RootState, createColor, updateColor, deleteOrder} from "../../store";
import { useNavigate } from 'react-router';

const headers: Header[] = [
  {name: 'id', text: 'ID'},
  {name: 'customerName', text: 'Customer Name'},
  {name: 'employeeName', text: 'Employee Name'},
  {name: 'deliveryAddress', text: 'Delivery Address'},
  {name: 'saleDate', text: 'Sale Date'},
  {name: 'action', text: ''}
]


export default () => {
  const navigate = useNavigate()
  const {data : orders} = useSelector((state: RootState) => state.orders)


  const dataOrders= orders.map((order:Order)=>{
    return {...order, customerName: order.customer.name, employeeName: order.employee.name}

  })
  console.log(orders)
  const onAdd = () => {
    navigate('/order/0')
  }

  const onUpdate = (id:number) => {
    navigate(`/order/${id}`)
  }

  const  onDelete = async (id:number) => {
    await store.dispatch(deleteOrder(id))

  }




  return (
    <>
      <FHeader title={'Colors'}/>
      <Box sx={{maxWidth: 500, margin: 'auto'}}>
        <SearchBar onAdd={onAdd}/>

        <FTable
          headers={headers}
          rows={dataOrders}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />

      </Box>
    </>
  )
}