package org.cakeshop.controllers;

import org.cakeshop.beans.Productdocument;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

import java.util.Collection;
import java.util.List;

/**
 * Created by miaur on 31.08.2016.
 */
public class CakeShopUser {
    public List<Productdocument> productsInCart;
}
