export const protect = async(req, res, next  )=>{
    try {
        const {userId, has} = await req.auth();

        if(!userId){
            return res.status(401).json({message:"Unauthorized"})
        }
        const hasPremium = await has({plan:'premium'})

    } catch (error) {
        
    }
}