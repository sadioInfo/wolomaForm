import React, {useState} from 'react'
import {useForm, useFieldArray} from "react-hook-form";
import {dataHouseConstructor} from "../utils/functionFactory"
import { notify } from '../utils/toast';

function Main() {
    const [loading, setLoading] = useState(false);
    const {
        handleSubmit,
        register, 
        reset, 
        setValue, 
        getValues,
        watch,
        control,
        formState: {errors},
        } = useForm({
            defaultValues: {
                dataHouse: [
                    {}
                ]
            },
            mode: "onBlur",
            reValidateMode: "onChange",
            shouldUnregister: false,
        });

    const formData = watch();
    const {fields, append, remove} = useFieldArray({
        control,
        name: "DataHouse",
    });

    console.log("fields",fields);
    
    const onSubmit = (data) => {
        const dataHouse = dataHouseConstructor(data);
        console.log("dataHouse =>",dataHouse)
        setLoading(true);
        try {
            reset();
            notify("Votre requète s'est executée avec succès", "success");

        } catch (error) {
            notify("Une erreur est survenue", "error")
        }
        setLoading(false);
    }
    
  return (
    <div className="flex flex-col items-center justify-center space-y-8">
        <h3 className="text-gray-900 text-xl font-medium">Ajout d'un nouveau logement</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* field 1  */}
                <div className="flex flex-col space-y-1">
                    <label className="font-normal text-gray-700 ml-2">Addresse</label>
                    <input 
                        type={"text"} 
                        placeholder="entrer votre address" 
                        {...register('adress', { required: "champs requis"})}
                        className="w-full py-2 px-6 border-2 border-gray-200 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500
                        sm:w-80 placeholder:text-xs placeholder:text-gray-400" 
                    />
                    <p className='pt-1 text-xs text-red-600 font-light'>
                        {errors?.adress?.message}
                    </p>
                </div>
                {/* field 2 */}
                <div className="flex flex-col space-y-1">
                    {/* font-medium text-gray-700 sm:basis-1/2 md:basis-3/12 */}
                    <label className="font-normal text-gray-700 ml-2">Information utile</label>
                    <input 
                        type={"text"} 
                        placeholder="entrer les informations utiles" 
                        {...register('utilInfo', { required: "champs requis"})}
                        className="w-full py-2 px-6 border-2 border-gray-200 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500
                        sm:w-80 placeholder:text-xs placeholder:text-gray-400"
                    />
                    <p className='pt-1 text-xs text-red-600 font-light'>
                    {errors?.utilInfo?.message}
                    </p>
                </div>
                {/* field 3 */}
                <div className="flex flex-col space-y-1">
                    <label className="font-normal text-gray-700 ml-2">Section</label>
                    <input 
                        type={"text"} 
                        placeholder="entrer la section" 
                        className="w-full py-2 px-6 border-2 border-gray-200 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500
                        sm:w-80 placeholder:text-xs placeholder:text-gray-400"
                        {...register('section', { required: "champs requis"})}
                    />
                    <p className='pt-1 text-xs text-red-600 font-light'>
                        {errors?.section?.message}
                    </p>
                </div>
                {/* field 4 */}
                <div className="flex flex-col space-y-1">
                    <label className="font-normal text-gray-700 ml-2">Numero</label>
                    <input 
                        type={"number"} 
                        placeholder="entrer le numero " 
                        {...register('numHouse', { required: "champs requis"})}
                        className="w-full py-2 px-6 border-2 border-gray-200 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500
                        sm:w-80 placeholder:text-xs placeholder:text-gray-400"
                    />
                    <p className='pt-1 text-xs text-red-600 font-light'>
                        {errors?.numHouse?.message}
                    </p>
                </div>
                {/* field 5 */}
                <div className="flex flex-col space-y-1">
                    <label className="font-normal text-gray-700 ml-2">Price</label>
                    <input 
                        type={"number"} 
                        placeholder="0.0 GNF" 
                        {...register('price', { required: "champs requis"})}
                        className="w-full py-2 px-6 border-2 border-gray-200 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500
                        sm:w-80 placeholder:text-xs placeholder:text-gray-400"
                    />
                    <p className='pt-1 text-xs text-red-600 font-light'>
                        {errors?.price?.message}
                    </p>
                </div>
                {/* field 6 */}
                <div className="flex flex-col space-y-1">
                <label className="font-normal text-gray-700 ml-2">Avance</label>
                <input 
                    type={"number"} 
                    placeholder="Nombre de mois d'avance" 
                    {...register('advance', { required: "champs requis"})}
                    className="w-full py-2 px-6 border-2 border-gray-200 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500
                    sm:w-80 placeholder:text-xs placeholder:text-gray-400"
                />
                 <p className='pt-1 text-xs text-red-600 font-light'>
                    {errors?.advance?.message}
                </p>
                </div>
                {/* field 7 */}
                <div className="flex flex-col space-y-1">
                <label className="font-normal text-gray-700 ml-2">Nombre de chambre</label>
                <input 
                    type={"number"} 
                    placeholder="entrer le nombre de chambre" 
                    {...register('bedroom', { required: "champs requis"})}
                    className="w-full py-2 px-6 border-2 border-gray-200 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500
                    sm:w-80 placeholder:text-xs placeholder:text-gray-400"
                />
                 <p className='pt-1 text-xs text-red-600 font-light'>
                    {errors?.bedroom?.message}
                </p>
                </div>
                {/* field 8 */}
                <div className="flex flex-col space-y-1">
                <label className="font-normal text-gray-700 ml-2">Rating</label>
                <input 
                    type={"number"} 
                    placeholder="donner une note (1 à 5)" 
                    {...register('rating', { required: "champs requis"})}
                    className="w-full py-2 px-6 border-2 border-gray-200 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500
                    sm:w-80 placeholder:text-xs placeholder:text-gray-400"
                />
                 <p className='pt-1 text-xs text-red-600 font-light'>
                    {errors?.rating?.message}
                </p>
                </div>
                {/* field 9 */}
                <div className="flex flex-col space-y-1">
                <label className="font-normal text-gray-700 ml-2">Image principale</label>
                <input 
                    type={"text"} 
                    placeholder="entrer url de votre image" 
                    {...register('mainImg', { required: "champs requis"})}
                    className="w-full py-2 px-6 border-2 border-gray-200 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500
                    sm:w-80 placeholder:text-xs placeholder:text-gray-400 "
                />
                 <p className='pt-1 text-xs text-red-600 font-light'>
                    {errors?.mainImg?.message}
                </p>
                </div>
                {/* field 10 */}
                <div className="flex flex-col space-y-1">
                <label className="font-normal text-gray-700 ml-2">Sous Image</label>
                <input 
                    type={"text"} 
                    placeholder="entrer url de vos image" 
                    {...register('subImg', { required: "champs requis"})}
                    className="w-full py-2 px-6 border-2 border-gray-200 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500
                    sm:w-80 placeholder:text-xs placeholder:text-gray-400"
                />
                 <p className='pt-1 text-xs text-red-600 font-light'>
                    {errors?.subImg?.message}
                </p>
                </div>
                {/* field 11 */}
                <div className="flex flex-col space-y-1 md:col-span-2">
                <label className="font-normal text-gray-700 ml-2">Description</label>
                <input 
                    type={"text"} 
                    placeholder="entrer un text de description" 
                    {...register('des', { required: "champs requis"})}
                    className=" py-2 px-6 border-2 border-gray-200 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500
                        placeholder:text-xs placeholder:text-gray-400"
                />
                 <p className='pt-1 text-xs text-red-600 font-light'>
                    {errors?.des?.message}
                </p>
                </div>
                {/* div button  */}
                <div className="flex flex-col  space-y-4 md:justify-end md:col-span-2  md:flex-row md:space-x-8 md:space-y-0">
                <button type='reset' className="text-md text-blue-500 hover:cursor-pointer hover:border-b-2 p-2 hover:border-blue-500">Annuler</button>
                <button type='submit' className="px-6 py-2 bg-blue-500 hover:cursor-pointer shadow-md text-md text-white rounded-md 
                focus:outline-none hover:bg-white hover:text-blue-500  duration-100 hover:border hover:border-blue-500">Ajouter</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Main