import { useMutation } from "@apollo/client";
import { useForm } from "antd/lib/form/Form";
import MarketWriteUI from "./marketWrite.presenter";
import { Modal } from "antd";
import { yupResolver } from "@hookform/resolvers/yup";
import { CREATE_USED_ITEM } from "./marketWrite.queries";

export default function MarketWrite() {
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const [createUseditem] = useMutation(CREATE_USED_ITEM);

  async function onSubmit(data) {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name:data.name,
            remarks:data.remarks,
            contents:data.contents,
            price:data.price,
            tags:data.tags.replace(정규표현식넣고).split(" ").filter()
            images: ,
          }
        },
      });

    //   Modal.info({ content: "로그인 완료!!" });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  }
  return( <MarketWriteUI 
  register={register}
  handleSubmit={handleSubmit}
  onSubmit={onSubmit}
  isActive={formState.isValid}
  />);
  }
  

