import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore";
import { db , auth } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
interface CreateFormData {
    title: string;
    description: string;
}

export const CreateForm = () => {

    const [user] = useAuthState(auth);

    const navigate = useNavigate();

    const schema = yup.object().shape({
        title: yup.string().required("U must add a title "),
        description: yup.string().required("U must add a description ")
    });

    const { register,handleSubmit, formState: { errors } } = useForm<CreateFormData>({
        resolver: yupResolver(schema)
    })

    const postsRef = collection(db, "posts");


    const onCreatePost = async (data:CreateFormData) => {
        await addDoc(postsRef, {
            title: data.title,
            description: data.description,
            username: user?.displayName,
            userId: user?.uid
        })

        navigate("/");
    }

    return (
        <form onSubmit={handleSubmit(onCreatePost)}>
            <input type="text" placeholder="Title......" {...register("title")}/>
            <p>{errors.title?.message}</p>            
            <input type="text" placeholder="Description......" {...register("description")}/>
            <p>{errors.description?.message}</p>            

            <input type="submit" className="btn-submit"/>
        </form>
    )
}