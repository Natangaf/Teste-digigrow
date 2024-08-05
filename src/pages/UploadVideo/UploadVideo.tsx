import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Select from "react-select";
import { InputValidator } from "../../components/inputs";
import { videoReq } from "../../schema/videosSchema";
import { VideoReqType } from "../../types/videoTypes";
import {
  ContainerUpload,
  ButtonSend,
  AddCategorieButton,
} from "./_uploadVideo";
import { categoryService } from "../../services/categoryService";
import { useVideo } from "../../context/videosContext";
import { useNavigate } from "react-router-dom";

const UploadVideo: React.FC = () => {
  const { NewVideo } = useVideo();

  const navigate = useNavigate();

  const [options, setOptions] = useState<{ value: string; label: string }[]>(
    []
  );
  const [newCategory, setNewCategory] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<
    { value: string; label: string }[]
  >([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const fetchedCategories = await categoryService.get();
        setOptions(
          fetchedCategories.map((cat) => ({ value: cat.name, label: cat.name }))
        );
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<VideoReqType>({
    resolver: zodResolver(videoReq),
  });

  const onSubmit: SubmitHandler<VideoReqType> = async (data) => {
    const response = await NewVideo(data);
    return navigate(`/assitindo/${response._id}`);
  };
  const handleAddCategory = () => {
    if (
      newCategory &&
      !options.some((option) => option.value === newCategory)
    ) {
      const newCategoryOption = { value: newCategory, label: newCategory };
      const updatedOptions = [...options, newCategoryOption];
      const updatedSelectedCategories = [
        ...selectedCategories,
        newCategoryOption,
      ];
      setOptions(updatedOptions);
      setSelectedCategories(updatedSelectedCategories);
      setValue(
        "category",
        updatedSelectedCategories.map((option) => option.value)
      );
      setNewCategory("");
    }
  };

  return (
    <ContainerUpload>
      <h1>Upload de Vídeo</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputValidator
          id="title"
          label="Título do Vídeo:"
          placeholder="Digite o título do vídeo."
          error={errors.title?.message}
          {...register("title", { required: "Digite o título do vídeo." })}
        />
        <InputValidator
          id="description"
          label="Descrição:"
          placeholder="Digite a descrição do vídeo."
          error={errors.description?.message}
          {...register("description", {
            required: "Digite a descrição do vídeo.",
          })}
        />
        <InputValidator
          id="videoUrl"
          label="URL do Vídeo:"
          placeholder="Digite a URL do vídeo."
          error={errors.videoUrl?.message}
          {...register("videoUrl", { required: "Digite a URL do vídeo." })}
        />

        <label>Selecionar ou Adicionar Categoria:</label>
        <Select
          isMulti
          options={options}
          value={selectedCategories}
          onChange={(selectedOptions) => {
            setSelectedCategories(
              selectedOptions
                ? (selectedOptions as { value: string; label: string }[])
                : []
            );
            setValue(
              "category",
              selectedOptions
                ? selectedOptions.map((option) => option.value)
                : []
            );
          }}
          classNamePrefix="select"
          placeholder="Selecione ou adicione categorias"
        />
        <InputValidator
          id="newCategory"
          label="Adicionar Nova Categoria:"
          placeholder="Digite uma nova categoria"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <AddCategorieButton type="button" onClick={handleAddCategory}>
          Adicionar Categoria
        </AddCategorieButton>

        <InputValidator
          id="thumbnail"
          label="Imagem para Thumbnail:"
          error={errors.thumbnail?.message}
          {...register("thumbnail", {
            required: "Selecione uma imagem para thumbnail.",
          })}
        />
        <ButtonSend type="submit">Enviar</ButtonSend>
      </form>
    </ContainerUpload>
  );
};

export default UploadVideo;
