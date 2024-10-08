import { Hono } from "hono";
import { listVehicleSpecifications, getVehicleSpecification, createVehicleSpecification, updateVehicleSpecification, deleteVehicleSpecification } from "./vehicleSpec.controller";
import { adminOrUserRoleAuth, adminRoleAuth } from "../middlewear/bearAuth";
import { vehicleSchema, vehicleSpecificationsSchema } from "../validators";
import { zValidator } from "@hono/zod-validator";

export const vehicleSpecificationsRouter = new Hono();

// GET all vehicle specifications - /api/vehicle-specifications
vehicleSpecificationsRouter.get("/vehicle-specifications",adminOrUserRoleAuth ,listVehicleSpecifications);

// GET a single vehicle specification by ID - /api/vehicle-specifications/:id
vehicleSpecificationsRouter.get("/vehicle-specifications/:id",adminOrUserRoleAuth,getVehicleSpecification);

// POST create a new vehicle specification - /api/vehicle-specifications
vehicleSpecificationsRouter.post("/vehicle-specifications",zValidator("json", vehicleSpecificationsSchema),adminRoleAuth ,createVehicleSpecification);

// PUT update a vehicle specification by ID - /api/vehicle-specifications/:id
vehicleSpecificationsRouter.put("/vehicle-specifications/:id",adminRoleAuth , updateVehicleSpecification);

// DELETE a vehicle specification by ID - /api/vehicle-specifications/:id
vehicleSpecificationsRouter.delete("/vehicle-specifications/:id",adminRoleAuth ,deleteVehicleSpecification);
