/*
A very basic chaincode which allows to add and query
*/

const { Contract } = require('fabric-contract-api');

class Platfrom extends Contract {
    
    async addOpinion(ctx, opinion) {
        // using putState to add 
        await ctx.stub.putState(JSON.parse(opinion).id.toString(), Buffer.from(opinion));
        return ctx.stub.getTxID()
    } 

    async queryOpinion(ctx, opinionId) {
        const assetAsBytes = await ctx.stub.getState(opinionId); 
        return assetAsBytes.toString();
    } 

    async modifyOpinion()
}

module.exports = Platfrom