const createUserSlice = (set, get) => ({
  reqUser: [],
  getReqUser: async () => {
    const res = await fetch("http://localhost:4000/auth/getReqUser");
    console.log(res.data);
    set({ reqUser: await res.data });
  },
});

export default createUserSlice;
