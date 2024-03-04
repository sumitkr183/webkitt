"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import Form, { FormArea, FormGroup, FormRadio } from "@/components/ui/form";
import Button from "@/components/ui/button";
import { ICampaignProps } from "@/types/campaign.type";
import { FileUploader } from "react-drag-drop-files";
import { useRef } from "react";

const CreateCampaign = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICampaignProps>();

  const onSubmit: SubmitHandler<ICampaignProps> = async (data) =>
    console.log(data);

  console.log(errors);

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="form-settings">
      <FormGroup required label="Campaign Name">
        <FormArea
          placeholder="Enter your campaign name (This will be the title for your post)"
          {...register("title", { required: "Campaign name is required" })}
        />
        {errors.title && (
          <span className="required-field">{errors.title.message}</span>
        )}
      </FormGroup>
      <div className="d-flex mb-3">
        <FormRadio
          label="Image"
          value="image"
          {...register("type", { required: "Campaign type is required" })}
        />
        <FormRadio
          label="Video"
          value="video"
          {...register("type", { required: "Campaign type is required" })}
        />
      </div>
      {/* <FileUploader
        {...register("files", { required: "Please select a file" })}
      /> */}
      {errors.type && (
        <span className="required-field">{errors.type.message}</span>
      )}
      <div className="mt-3">
        <Button className="mr-3" variant="success" rounded>
          Create Campaign
        </Button>
        <Button rounded>Publish Campaign</Button>
      </div>
    </Form>
  );
};

export default CreateCampaign;
