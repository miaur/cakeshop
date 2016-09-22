package org.cakeshop.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoDocument;
import org.cakeshop.beans.Imageset;
import org.hippoecm.hst.content.beans.standard.HippoHtml;

@HippoEssentialsGenerated(internalName = "cakeshopproject:productdocument")
@Node(jcrType = "cakeshopproject:productdocument")
public class Productdocument extends BaseDocument {
    @HippoEssentialsGenerated(internalName = "cakeshopproject:title")
    public String getTitle() {
        return getProperty("cakeshopproject:title");
    }

    @HippoEssentialsGenerated(internalName = "cakeshopproject:compound")
    public String getCompound() {
        return getProperty("cakeshopproject:compound");
    }

    @HippoEssentialsGenerated(internalName = "cakeshopproject:typeofcookie")
    public String getTypeofcookie() {
        return getProperty("cakeshopproject:typeofcookie");
    }

    @HippoEssentialsGenerated(internalName = "cakeshopproject:image")
    public Imageset getImage() {
        return getLinkedBean("cakeshopproject:image", Imageset.class);
    }

    @HippoEssentialsGenerated(internalName = "cakeshopproject:description")
    public HippoHtml getDescription() {
        return getHippoHtml("cakeshopproject:description");
    }

    @HippoEssentialsGenerated(internalName = "cakeshopproject:price")
    public Double getPrice() {
        return getProperty("cakeshopproject:price");
    }
}
