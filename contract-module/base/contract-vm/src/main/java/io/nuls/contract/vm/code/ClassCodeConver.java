package io.nuls.contract.vm.code;

import org.objectweb.asm.tree.ClassNode;
import org.objectweb.asm.tree.FieldNode;
import org.objectweb.asm.tree.LocalVariableNode;
import org.objectweb.asm.tree.MethodNode;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class ClassCodeConver {

    public static ClassCode toClassCode(ClassNode classNode) {
        ClassCode classCode = new ClassCode();
        classCode.setVersion(classNode.version);
        classCode.setAccess(classNode.access);
        classCode.setName(classNode.name);
        classCode.setSignature(classNode.signature);
        classCode.setSuperName(classNode.superName);
        classCode.setInterfaces(classNode.interfaces != null ? classNode.interfaces : new ArrayList<>());
        classCode.setSourceFile(classNode.sourceFile);
        classCode.setSourceDebug(classNode.sourceDebug);
        classCode.setModule(classNode.module);
        classCode.setOuterClass(classNode.outerClass);
        classCode.setOuterMethod(classNode.outerMethod);
        classCode.setOuterMethodDesc(classNode.outerMethodDesc);
        classCode.setVisibleAnnotations(classNode.visibleAnnotations);
        classCode.setInvisibleAnnotations(classNode.invisibleAnnotations);
        classCode.setVisibleTypeAnnotations(classNode.visibleTypeAnnotations);
        classCode.setInvisibleTypeAnnotations(classNode.invisibleTypeAnnotations);
        classCode.setAttrs(classNode.attrs);
        classCode.setInnerClasses(classNode.innerClasses != null ? classNode.innerClasses : new ArrayList<>());
        classCode.setFields(toFieldCodes(classNode.fields));
        classCode.setMethods(toMethodCodes(classCode, classNode.methods));
        classCode.setVariableType(VariableType.valueOf(classNode.name));
        return classCode;
    }

    public static FieldCode toFieldCode(FieldNode fieldNode) {
        FieldCode fieldCode = new FieldCode();
        fieldCode.setAccess(fieldNode.access);
        fieldCode.setName(fieldNode.name);
        fieldCode.setDesc(fieldNode.desc);
        fieldCode.setSignature(fieldNode.signature);
        fieldCode.setValue(fieldNode.value);
        fieldCode.setVisibleAnnotations(fieldNode.visibleAnnotations);
        fieldCode.setInvisibleAnnotations(fieldNode.invisibleAnnotations);
        fieldCode.setVisibleTypeAnnotations(fieldNode.visibleTypeAnnotations);
        fieldCode.setInvisibleTypeAnnotations(fieldNode.invisibleTypeAnnotations);
        fieldCode.setAttrs(fieldNode.attrs);
        fieldCode.setVariableType(VariableType.valueOf(fieldNode.desc));
        return fieldCode;
    }

    public static List<FieldCode> toFieldCodes(List<FieldNode> fieldNodes) {
        return fieldNodes == null ? new ArrayList<>() : fieldNodes.stream().map(ClassCodeConver::toFieldCode).collect(Collectors.toList());
    }

    public static MethodCode toMethodCode(ClassCode classCode, MethodNode methodNode) {
        MethodCode methodCode = new MethodCode();
        methodCode.setAccess(methodNode.access);
        methodCode.setName(methodNode.name);
        methodCode.setDesc(methodNode.desc);
        methodCode.setSignature(methodNode.signature);
        methodCode.setExceptions(methodNode.exceptions);
        methodCode.setParameters(methodNode.parameters);
        methodCode.setVisibleAnnotations(methodNode.visibleAnnotations);
        methodCode.setInvisibleAnnotations(methodNode.invisibleAnnotations);
        methodCode.setVisibleTypeAnnotations(methodNode.visibleTypeAnnotations);
        methodCode.setInvisibleTypeAnnotations(methodNode.invisibleTypeAnnotations);
        methodCode.setAttrs(methodNode.attrs);
        methodCode.setAnnotationDefault(methodNode.annotationDefault);
        methodCode.setVisibleParameterAnnotations(methodNode.visibleParameterAnnotations);
        methodCode.setInvisibleParameterAnnotations(methodNode.invisibleParameterAnnotations);
        methodCode.setInstructions(methodNode.instructions);
        methodCode.setTryCatchBlocks(methodNode.tryCatchBlocks != null ? methodNode.tryCatchBlocks : new ArrayList<>());
        methodCode.setMaxStack(methodNode.maxStack);
        methodCode.setMaxLocals(methodNode.maxLocals);
        methodCode.setLocalVariables(toLocalVariableCodes(methodNode.localVariables));
        methodCode.setVisibleLocalVariableAnnotations(methodNode.visibleLocalVariableAnnotations);
        methodCode.setInvisibleLocalVariableAnnotations(methodNode.invisibleLocalVariableAnnotations);
        //.visited(methodNode.visited)
        methodCode.setClassCode(classCode);
        methodCode.setReturnVariableType(VariableType.parseReturn(methodNode.desc));
        methodCode.setArgsVariableType(VariableType.parseArgs(methodNode.desc));
        return methodCode;
    }

    public static List<MethodCode> toMethodCodes(ClassCode classCode, List<MethodNode> methodNodes) {
        return methodNodes == null ? new ArrayList<>() : methodNodes.stream().map(methodNode -> toMethodCode(classCode, methodNode)).collect(Collectors.toList());
    }

    public static LocalVariableCode toLocalVariableCode(LocalVariableNode localVariableNode) {
        LocalVariableCode localVariableCode = new LocalVariableCode();
        localVariableCode.setName(localVariableNode.name);
        localVariableCode.setDesc(localVariableNode.desc);
        localVariableCode.setSignature(localVariableNode.signature);
        localVariableCode.setStart(localVariableNode.start);
        localVariableCode.setEnd(localVariableNode.end);
        localVariableCode.setIndex(localVariableNode.index);
        localVariableCode.setVariableType(VariableType.valueOf(localVariableNode.desc));
        return localVariableCode;
    }

    public static List<LocalVariableCode> toLocalVariableCodes(List<LocalVariableNode> localVariableNodes) {
        return localVariableNodes == null ? new ArrayList<>() : localVariableNodes.stream().map(ClassCodeConver::toLocalVariableCode).collect(Collectors.toList());
    }

}
