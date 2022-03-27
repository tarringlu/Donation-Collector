package com.laioffer.donationcollector.controller;

import com.laioffer.donationcollector.service.CartItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
public class CartItemController {

    private CartItemService cartItemService;

    @Autowired
    public CartItemController(CartItemService cartItemService) {
        this.cartItemService = cartItemService;
    }

    @PostMapping(value = "order/{itemId}")
    public void addItemToCart(@PathVariable Long itemId, Principal principal) {
        System.out.println(itemId);
        cartItemService.addItemToCart(itemId, principal);
    }
}