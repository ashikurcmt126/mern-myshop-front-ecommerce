//search: "?cid=60c1a7e269fd13121c6832c4&type=store"
export default (query) => {
    if(query){
        const queryString = query.split("?")[1];
        if(queryString.length > 0){
            const params = queryString.split("&");
            const paramsObj = {};
            params.forEach(param => {
                const keyValue = param.split("=");
                paramsObj[keyValue[0]] = keyValue[1];
            });
            return paramsObj;
        }
    }
    return {};
}