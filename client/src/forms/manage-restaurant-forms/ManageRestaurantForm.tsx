import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import DetailsSection from "./DetailsSection";
import { Separator } from "@/components/ui/separator";
import CuisinesSection from "./CuisinesSection";
import MenuSection from "./MenuSection";
import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";
import ImageSection from "./ImageSection";

const formSchema = z.object({
    restaurantName: z.string({
        required_error: "restaurant name is required",
    }).min(1),
    address: z.string({
        required_error: "address is required",
    }),
    city: z.string({
        required_error: "city is required",
    }).min(1),
    state: z.string({
        required_error: "state is required",
    }).min(1),
    country: z.string({
        required_error: "country is required",
    }).min(1),
    pincode: z.string({
        required_error: "pincode is required",
    }).min(5),
    phoneNumber: z.string({
        required_error: "phone Number is required",
    }).min(10),
    deliveryPrice: z.coerce.number({
        required_error: "deliveryPrice is required",
        invalid_type_error: "must be a valid number",
    }).positive("delivery price must be a positive number"),

    estimatedDeliveryTime: z.coerce.number({
        required_error: "estimated delivery time is required",
        invalid_type_error: "must be a valid number",
    }).positive("delivery price must be a positive number"),

    cuisines: z.array(z.string()).nonempty({
        message: "please select at least one item",
    }),

    menuItems: z.array(z.object({
        name: z.string().min(1, "name is required"),
        price: z.coerce.number().min(1, "price is required"),
    })),

    imageFile: z.instanceof(File, { message: 'Restaurant image is required' }),

})

type RestaurantFormData = z.infer<typeof formSchema>

type Props = {
  onSave: (restaurantFormData: FormData) => void;
  isLoading: boolean;
};

const ManageRestaurantForm = ({onSave, isLoading}: Props) => {
  const form = useForm<RestaurantFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
    cuisines: [],
    menuItems: [{name: "", price: 0,}]
    },
});

    const onSubmit = (formDataJson: RestaurantFormData) => {
        // we have to convert formDataJson to formDataobject
        const formData = new FormData();

        formData.append("restaurantName", formDataJson.restaurantName);
        formData.append("address", formDataJson.address);
        formData.append("city", formDataJson.city);
        formData.append("state", formDataJson.state);
        formData.append("country", formDataJson.country);
        formData.append("pincode", formDataJson.pincode);
        formData.append("phoneNumber", formDataJson.phoneNumber);
        formData.append("deliveryPrice", (formDataJson.deliveryPrice * 100).toString());
        formData.append("estimatedDeliveryTime", formDataJson.estimatedDeliveryTime.toString());


        formDataJson.cuisines.forEach((cuisine, index) => {
            formData.append(`cuisines[${index}]`, cuisine);
        });

        formDataJson.menuItems.forEach((menuItem, index) => {
            formData.append(`menuItems[${index}][name]`, menuItem.name);
            formData.append(`menuItems[${index}][price]`, (menuItem.price * 100).toString());

        });
        
        formData.append(`imageFile`, formDataJson.imageFile);

        onSave(formData);
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 bg-gray-50 p-10 rounded-lg">
                <DetailsSection/>
                <Separator/> 
                <CuisinesSection/>
                <Separator/> 
                <MenuSection/>
                <Separator/> 
                <ImageSection/>
                {isLoading ? <LoadingButton /> : <Button type="submit">Submit</Button>}
            </form>
        </Form>
    )

};

export default ManageRestaurantForm;