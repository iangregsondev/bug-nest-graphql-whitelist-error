import { NotFoundException } from "@nestjs/common";
import { Args, Mutation, Query, Resolver, Subscription } from "@nestjs/graphql";
import { PubSub } from "apollo-server-express";
import { NewRecipeInput } from "./dto/new-recipe.input";
import { RecipesArgsDto } from "./dto/recipes.args";
import { Recipe } from "./models/recipe";
import { RecipesService } from "./recipes.service";

const pubSub = new PubSub();

@Resolver(of => Recipe)
export class RecipesResolver {
  constructor(private readonly recipesService: RecipesService) {}

  @Query(returns => String)
  recipes(@Args() recipesArgs: RecipesArgsDto): string {
    return recipesArgs.id ?? "OOPS! It was undefined!";
  }
}
