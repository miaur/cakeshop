package org.cakeshop.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoDocument;
import org.cakeshop.beans.Imageset;

@HippoEssentialsGenerated(internalName = "cakeshopproject:galleryimage")
@Node(jcrType = "cakeshopproject:galleryimage")
public class Galleryimage extends BaseDocument {
    @HippoEssentialsGenerated(internalName = "cakeshopproject:likes")
    public Long getLikes() {
        return getProperty("cakeshopproject:likes");
    }

    @HippoEssentialsGenerated(internalName = "cakeshopproject:image")
    public Imageset getImage() {
        return getLinkedBean("cakeshopproject:image", Imageset.class);
    }

    @HippoEssentialsGenerated(internalName = "cakeshopproject:title")
    public String getTitle() {
        return getProperty("cakeshopproject:title");
    }
}
