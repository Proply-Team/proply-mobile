import axiosInstance from './AxiosInstance';

const ProcurementListService = () => {
  const getAll = async () => {
    try {
      const response = await axiosInstance.get("procurements");
      console.log(response.data);
      
      if (response.data.statusCode === 200) {
        return response.data;
      } else {
        throw new Error(response.data.message || response.status);
      }
    } catch (error) {
        console.log(error)
      throw new Error(error.response?.data?.message);
    }
  };

  const approve = async (id, detailId) => {
    try {
      const response = await axiosInstance.put('procurements/approve', {
        procurementId: id,
        procurementDetailId: detailId
      });
      console.log(response.data);
  
      if (response.data.statusCode === 200) {
        return response.data;
      } else {
        throw new Error(response.status);
      }
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  };

  const reject = async (id, detailId) => {
    try {
      const response = await axiosInstance.put('procurements/reject', {
        procurementId: id,
        procurementDetailId: detailId
      });
      console.log(response.data);
  
      if (response.data.statusCode === 200) {
        return response.data;
      } else {
        throw new Error(response.status);
      }
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  };

  return {
    getAll,
    approve,
    reject
  };
};

export default ProcurementListService;