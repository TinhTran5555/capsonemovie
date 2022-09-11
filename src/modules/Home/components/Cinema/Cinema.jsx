import React, { Fragment } from 'react'
import { Tabs } from 'antd';
import useRequest from "hooks/useRequest";
import movieAPI from "apis/movieAPI";
import { NavLink } from 'react-router-dom';
import moment from 'moment';

const Cinema = () => {
 const {
  data: cumraps,
  isLoading,
  error,
} = useRequest(() => movieAPI.GetCumRapDetails());

  return ( 
    <Tabs className='max-w-5xl m-auto' defaultActiveKey="0"  tabPosition='left' >{cumraps?.map((cumrap,index) => { return ( 
      
      <Tabs.TabPane  key={index} tab={<img src={cumrap.logo} className="rounded-full w-12"/>} >
    <Tabs defaultActiveKey="0"  tabPosition='left' className=''>

          {cumrap.lstCumRap?.map((listcumrap,index) => {
            return(
              
                <Tabs.TabPane key={index} tab={
                  <div className='w-80 flex'>
                    <img src={listcumrap.hinhAnh} className="rounded-full w-12"/>
                    <div className='text-left ml-2'>
                      {listcumrap.tenCumRap}
                      <p className='text-emerald-500'>{listcumrap.diaChi}</p>
                      <p className='text-red-100'>Chi Tiết</p>
                        

                    </div>
                  </div>
                }>
                   {listcumrap.danhSachPhim.slice(0,4).map((movie,index) => {
        return (
          <Fragment key={index}>
            <div className='my-5'>
              <div className='flex'>
                <img className='w-14 h-14' src={movie.hinhAnh} alt={movie.hinhAnh} />
                <div className='ml-2 flex flex-col'>
                  <h1 className='text-2xl text-green-700'>{movie.tenPhim}</h1>
                  <div className='grid grid-cols-6 gap-6'>
                  {movie.lstLichChieuTheoPhim?.slice(0,12).map((lichChieu,index) => {
                    return (
                      <NavLink className="text-2xl text-green-400" to="/" key={index}>
                          {moment(lichChieu.ngayChieuGioChieu).format("hh:mm A")}
                      </NavLink>
                    )
                  } )}
                    
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
        )
       })}
                 
                  

                </Tabs.TabPane>
              
            )
          })}
     </Tabs> </Tabs.TabPane> )
    })}
    </Tabs>
  )
}

export default Cinema
