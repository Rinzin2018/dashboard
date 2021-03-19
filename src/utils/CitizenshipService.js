import baseApi from './api';

export const citizenshipFetch = (cid) => {
  return baseApi(`/getcitizendetails/${cid}`, 'get').then(response => {
    return response.data;
  });
};
